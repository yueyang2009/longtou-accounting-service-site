import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "龙头会服（河南龙头会计服务有限公司）关于用户与企业信息收集、使用与保护的说明。",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "2026年9月";

export default function PrivacyPage() {
  return (
    <Layout>
      <section data-header-theme="dark" className="section-surface border-b border-white/10 bg-[linear-gradient(135deg,#0b120f,#132219_58%,#0c1712)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[.2em] text-[#d9c7a5]">法律条款</p>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">隐私政策</h1>
          <p className="mt-5 text-sm text-white/60">最后更新：{UPDATED}</p>
        </div>
      </section>

      <section>
        <div className="prose-lite mx-auto max-w-3xl px-6 py-16 text-brand-body md:py-20">
          <p>
            本政策说明 {brand.legalName}（以下简称"我们"）在您使用本网站（longtou.audit-report-check.com）及提交咨询信息时，如何收集、使用、存储和保护相关信息。请在使用前仔细阅读。
          </p>

          <h2>一、我们收集哪些信息</h2>
          <ul>
            <li>您主动填写的信息：企业名称、所属行业、营收区间、关注的问题、是否设有财务团队、是否有审计经历，以及联系人与联系方式（电话、微信或邮箱）。</li>
            <li>您通过电话、微信、邮件等方式与我们沟通时提供的信息。</li>
          </ul>

          <h2>二、信息的使用目的</h2>
          <ul>
            <li>与您取得联系，了解企业情况并判断是否适合进一步合作。</li>
            <li>安排经营交流、企业尽调与后续顾问服务。</li>
            <li>改进我们的服务内容与网站体验。</li>
          </ul>
          <p>我们不会将上述信息用于与财税顾问服务无关的用途。</p>

          <h2>三、信息的共享与对外提供</h2>
          <p>
            我们不会向任何第三方出售您的信息。仅在以下情形下可能涉及共享：为提供服务而使用的必要工具或平台（如企业协作与邮件系统），且仅限于实现服务目的所必需的范围；或依据法律法规、监管机构的明确要求。
          </p>

          <h2>四、信息的存储与安全</h2>
          <p>
            我们在中华人民共和国境内存储相关信息，并采取合理的技术与管理措施保护信息安全，防止未经授权的访问、披露、篡改或丢失。请理解，互联网传输无法保证绝对安全。
          </p>

          <h2>五、保存期限</h2>
          <p>
            我们仅在实现本政策所述目的所必需的期限内保留您的信息，法律法规另有规定的除外。超过期限后，我们会删除或作匿名化处理。
          </p>

          <h2>六、您的权利</h2>
          <p>
            您有权查询、更正、删除您提供的信息，或撤回对我们的授权同意。如需行使上述权利，可通过本政策末尾的联系方式与我们联系，我们将在核实身份后依法处理。
          </p>

          <h2>七、Cookie 与统计</h2>
          <p>本网站不用于广告投放，也不会将您的信息用于个性化广告。</p>

          <h2>八、政策的更新</h2>
          <p>我们可能适时更新本政策。更新后的版本将在本页面公布，并自公布之日起生效。</p>

          <h2>九、联系我们</h2>
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
