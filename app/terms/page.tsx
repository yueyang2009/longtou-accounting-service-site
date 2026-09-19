import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "服务条款",
  description: "龙头会服（河南龙头会计服务有限公司）网站使用与服务说明。",
  alternates: { canonical: "/terms" },
};

const UPDATED = "2026年9月";

export default function TermsPage() {
  return (
    <Layout>
      <section data-header-theme="dark" className="section-surface border-b border-white/10 bg-[linear-gradient(135deg,#0b120f,#132219_58%,#0c1712)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[.2em] text-[#d9c7a5]">法律条款</p>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">服务条款</h1>
          <p className="mt-5 text-sm text-white/60">最后更新：{UPDATED}</p>
        </div>
      </section>

      <section>
        <div className="prose-lite mx-auto max-w-3xl px-6 py-16 text-brand-body md:py-20">
          <p>
            本条款适用于您访问和使用本网站（longtou.audit-report-check.com）及与 {brand.legalName}（以下简称"我们"）的初步沟通。正式服务合作以双方另行签署的书面合同为准。
          </p>

          <h2>一、网站内容性质</h2>
          <p>
            本网站发布的文章、案例、工具演示与说明，仅供一般性参考，不构成针对任何特定企业的会计、税务、法律或投资意见。案例信息均已脱敏，不代表对任何具体结果的承诺。
          </p>

          <h2>二、服务说明与边界</h2>
          <ul>
            <li>我们以年度财税顾问服务为主，不提供代账、代理记账、法定审计等需要专门资质的服务。</li>
            <li>我们不承接按次、一次性咨询为主的服务模式，具体以双方约定为准。</li>
            <li>我们不承诺规避税务检查、减少税负或保证特定结果。</li>
          </ul>

          <h2>三、咨询与预约</h2>
          <p>
            通过本网站表单、电话或微信进行的沟通，属于合作前的初步了解，不构成任何一方的合同义务。是否合作及具体服务范围、费用与交付，均以正式签署的服务合同为准。
          </p>

          <h2>四、知识产权</h2>
          <p>
            本网站的文字、图表、工具与页面设计等内容的著作权归我们或相关权利人所有。未经许可，不得用于商业用途的复制、转载或二次发布；个人学习或注明出处的非商业引用除外。
          </p>

          <h2>五、免责声明</h2>
          <p>
            我们会尽力保证网站信息的准确与及时，但不排除存在滞后或疏漏。因使用本网站内容而产生的任何决策与后果，应由使用者自行判断并承担；正式结论请以签署合同后的专业意见为准。
          </p>

          <h2>六、第三方链接与工具</h2>
          <p>
            本网站可能包含指向第三方（如演示工具、合作机构）的链接。第三方内容的准确性与安全性由其自行负责，我们不承担相关责任。
          </p>

          <h2>七、适用法律与争议解决</h2>
          <p>
            本条款及由此产生的争议适用中华人民共和国法律。双方应本着诚信原则先行协商解决；协商不成的，可向有管辖权的人民法院提起诉讼。
          </p>

          <h2>八、联系我们</h2>
          <ul>
            <li>电话：{brand.phone}</li>
            <li>邮箱：{brand.email}</li>
            <li>地址：{brand.address}</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
