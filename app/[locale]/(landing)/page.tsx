import { useTranslations } from "next-intl";

function LandingPage() {
    const t = useTranslations("Index");
    return (
        <div>
            <h1>{t("landing")}</h1>
        </div>
    );
}

export default LandingPage;
