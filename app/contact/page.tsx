import Image from "next/image";

import { Layout } from "@/components/Layout";
import { brand } from "@/lib/data";

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold text-brand-gold">微信联系</p>
          <h1 className="text-3xl font-semibold leading-tight text-brand-ink md:text-5xl">
            有需要，添加微信沟通
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-muted">
            扫码添加微信，直接联系。
          </p>
          <div className="mx-auto mt-10 w-56 border border-brand-line bg-brand-card p-3">
            <p className="mb-3 text-sm text-brand-muted">微信二维码</p>
            <div className="aspect-square w-full overflow-hidden border border-brand-line/50 bg-white">
              <Image
                src={brand.wechatQr}
                alt="个人微信二维码"
                width={525}
                height={525}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
