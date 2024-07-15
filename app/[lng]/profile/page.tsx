import { useTranslation } from "@/i18n";

export default async function Profile({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="mt-[96px] flex w-full flex-col items-center justify-center">
      <div className="max-w-[709px]">
        <span className="block font-serif font-[600]">Hello! I'm Viktor</span>
        <span className="block text-wrap break-words">{t("SelfIntroduce")}</span>
      </div>
    </div>
  );
}
