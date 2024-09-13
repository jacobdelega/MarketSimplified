import Link from "next/link";
import InstagramAuthButton from "@/components/InstagramAuthButton/InstagramAuthButton";

function page() {
    // APP ID: 1965805220557878
    // REDIRECT URL : https://market-simplified.vercel.app/dashboard
    // CLIENT SECRET: Az12kxaA30xA89s&$5sazl
    // Code: AQBU86H12wBcaht8EAu8DLLv0fItDY8sNW4DOw4Z2iL4JvrXT0SV0CT9DtCYWY5SBZFiTj2OEh3Qe0o-QAyb1hrPKtRnZUva1xnCSmCtJJehTuLzJTokc_HEkIII4CtO40fNNnyMWtjkTyNp7FTYVDGRfUTtG4YRfPb-Leo-eu8lgUYgzLWZL38UNi5xtwb1gDrvHhQplE-1VvTldzOSjmRO2FolAYDP7k0CiCep46p2sQ

    // CURL REQUEST
    //     curl -X POST \
    //   https://api.instagram.com/oauth/access_token \
    //   -F client_id=1965805220557878 \
    //   -F client_secret=Az12kxaA30xA89s&$5sazl \
    //   -F grant_type=authorization_code \
    //   -F redirect_uri=https://market-simplified.vercel.app/dashboard \
    //   -F code=AQBU86H12wBcaht8EAu8DLLv0fItDY8sNW4DOw4Z2iL4JvrXT0SV0CT9DtCYWY5SBZFiTj2OEh3Qe0o-QAyb1hrPKtRnZUva1xnCSmCtJJehTuLzJTokc_HEkIII4CtO40fNNnyMWtjkTyNp7FTYVDGRfUTtG4YRfPb-Leo-eu8lgUYgzLWZL38UNi5xtwb1gDrvHhQplE-1VvTldzOSjmRO2FolAYDP7k0CiCep46p2sQ

    return (
        <div className='w-full'>
            {/* <div className='flex justify-center h-screen'>
                <Link
                    href='https://api.instagram.com/oauth/authorize?client_id=1965805220557878&redirect_uri=https://market-simplified.vercel.app/&scope=user_profile,user_media&response_type=code'
                    className=' flex justify-center items-center'>
                    Press
                </Link>
                <InstagramAuthButton />
            </div> */}
        </div>
    );
}

export default page;
