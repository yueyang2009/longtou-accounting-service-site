export const waterVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying float vWave;
  uniform float uTime;
  uniform float uEnergy;
  void main() {
    vUv = uv;
    vec3 p = position;
    float wave = sin(p.x * 1.35 + uTime * 1.3) * 0.12 + cos(p.y * 1.7 - uTime) * 0.09;
    p.z += wave * (0.25 + uEnergy * 0.75);
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const waterFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying float vWave;
  uniform float uTime;
  uniform float uEnergy;
  void main() {
    float rings = sin(length(vUv - .5) * 70.0 - uTime * 5.0) * .5 + .5;
    rings = smoothstep(.78, 1.0, rings) * (0.15 + uEnergy * .36);
    vec3 water = mix(vec3(.008, .035, .08), vec3(.02, .18, .42), vUv.y + .25);
    water += vec3(.05, .32, .72) * rings;
    water += vec3(.12, .45, .9) * max(vWave, 0.0);
    gl_FragColor = vec4(water, .96);
  }
`;

export const particleVertexShader = /* glsl */ `
  attribute float aScale;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPhase;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float swirl = sin(aSeed * 31.0 + uTime * 1.25) * (0.15 + uPhase * .5);
    p.x += cos(aSeed * 18.0 + uTime) * swirl;
    p.z += sin(aSeed * 18.0 + uTime) * swirl;
    vAlpha = smoothstep(0.0, .18, uPhase) * (1.0 - smoothstep(.83, 1.0, uPhase));
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aScale * (190.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = /* glsl */ `
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - .5);
    float glow = smoothstep(.5, 0.0, d);
    gl_FragColor = vec4(.25, .7, 1.0, glow * vAlpha);
  }
`;
