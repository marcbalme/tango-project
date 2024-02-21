import { useTranslations } from "next-intl";

function LandingPage(): React.ReactNode {
    const t = useTranslations("Index");
    return (
        <div>
            <h1 className="text-2xl">{t("landing")}</h1>
        </div>
    );
}

export default LandingPage;
