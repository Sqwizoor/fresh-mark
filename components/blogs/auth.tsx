import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import { redirects } from "@wix/redirects";




const wixSingleton = (() => {
    let instance: ReturnType<typeof init>;

    const init = () => {
        return createClient({
            modules: {

                items,

                redirects,

            },
            auth: OAuthStrategy({
                clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,

            }),
        });
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = init();
            }
            return instance;
        },
    };
})();

export const getWixClient = () => wixSingleton.getInstance();