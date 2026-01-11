const year = new Date().getFullYear()

const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

function Footer() {
    return(
        <>
            <footer className="social-container">
                <button class="social twitter"
                    onClick={() => openLink("https://x.com/brunolinlcoln?s=21")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path
                            d="M18.244 2H21.5l-7.52 8.59L23 22h-6.844l-5.351-6.934L4.5 22H1.243l8.033-9.17L1 2h6.97l4.743 6.231L18.244 2zm-2.404 17.403h1.799L7.516 4.51H5.59l10.25 14.893z" />
                    </svg>
                </button>
                <button class="social snapchat"
                    onClick={() => openLink("https://snapchat.com/t/t9sOUN0b")}>
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M12 2c-2.6 0-5 2-5 5v1.2c0 .5-.3 1-.7 1.2C5 9.8 4 10.7 4 12c0 1.3 1 2.2 2.3 2.6.3.1.5.4.5.7-.1 1.2-.8 1.9-1.8 2.2-.5.2-.8.5-.8.9 0 .5.5.9 1.1.9.6 0 1.2-.2 1.9-.2.8 1.6 2.7 3 5.8 3s5-1.4 5.8-3c.7 0 1.3.2 1.9.2.6 0 1.1-.4 1.1-.9 0-.4-.3-.7-.8-.9-1-.3-1.7-1-1.8-2.2 0-.3.2-.6.5-.7C19 14.2 20 13.3 20 12c0-1.3-1-2.2-2.3-2.6-.4-.1-.7-.7-.7-1.2V7c0-3-2.4-5-5-5z" />
                    </svg>
                </button>
                <button class="social instagram"
                    onClick={() => openLink("https://www.instagram.com/slime_bruno8?igsh=bzA0M2kxbG9lNHp2&utm_source=qr")}>
                    <svg role="img" aria-labelledby="igTitle" viewBox="0 0 24 24" width="27" height="27" fill="none"
                        stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
                        xmlns="http://www.w3.org/2000/svg">
                        <title id="igTitle">Instagram</title>
                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                        <circle cx="12" cy="12" r="3.2"></circle>
                        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"></circle>
                    </svg>
                </button>
                <button class="social facebook"
                    onClick={() => openLink("https://www.facebook.com/share/1CM8rFF9Gn/?mibextid=wwXIfr")}>
                    <svg role="img" aria-label="Facebook" xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                        viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#1877F2" />
                        <path
                            d="M15.07 8.5h-1.41c-.55 0-1 .45-1 1v1.02h2.41l-.31 2.35h-2.1V20H10v-6.78H8.07V10.85H10V9.09c0-1.89 1.16-2.93 2.86-2.93.83 0 1.56.06 1.77.09v2.25z"
                            fill="#fff" />
                    </svg>
                </button>
                <button class=" social tiktok"
                    onClick={() => openLink("https://www.tiktok.com/@abdullah08138?_t=ZS-90spT6CQflS&_r=1")}>
                    <svg width="27" height="27" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.5 14.5V28C32.5 27.7 31.5 27.5 30.5 27.5C27 27.5 24 30.5 24 34C24 37.5 27 40.5 30.5 40.5C34 40.5 37 37.5 37 34V18H33.5V14.5Z"
                            fill="#25F4EE" />
                        <path
                            d="M33.5 14.5V28C32.5 27.7 31.5 27.5 30.5 27.5C27 27.5 24 30.5 24 34C24 37.5 27 40.5 30.5 40.5C34 40.5 37 37.5 37 34V18H33.5V14.5Z"
                            fill="#FE2C55" transform="translate(-1,-1)" />
                        <path
                            d="M33.5 14.5V28C32.5 27.7 31.5 27.5 30.5 27.5C27 27.5 24 30.5 24 34C24 37.5 27 40.5 30.5 40.5C34 40.5 37 37.5 37 34V18H33.5V14.5Z"
                            fill="#010101" />
                    </svg>
                </button>
                <button class="social whatsapp"
                    onClick={() => openLink("https://wa.me/23408156345656")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img"
                        aria-labelledby="waOutline">
                        <title id="waOutline">WhatsApp icon</title>
                        <path
                            d="M20.52 3.48A11.95 11.95 0 0 0 12 .5 11.95 11.95 0 0 0 3.48 3.48 11.95 11.95 0 0 0 .5 12c0 2.1.56 4.08 1.62 5.83L.5 23l4.51-1.4A11.95 11.95 0 0 0 12 23.5c3.18 0 6.16-1.24 8.52-3.48A11.95 11.95 0 0 0 23.5 12 11.95 11.95 0 0 0 20.52 3.48zM12 21c-8 0-9-7-9-9a9 9 0 0 1 18 0c0 2-1 9-9 9z"
                            fill="currentColor" />
                        <path
                            d="M17 14.5c-.5-.3-2.9-1.5-3.4-1.6-.5-.1-1-.1-1.5.5-.5.6-.6 1-1.4 1.1-.8.1-1.7-.7-3.6-2.6-1.4-1.4-2-2.9-1.8-3.6.2-.6.8-1 1.1-1.3.3-.3.6-.4 1-.5.3-.1.6 0 .9.4.2.3.6 1 1 1.6.4.6.8 1 .9 1.2.1.2.1.3 0 .6-.1.3-.2.6-.3.9-.1.3 0 .6.3.9.4.4 1 .8 1.7 1.2.7.4 1.3.5 1.8.4.5-.1 1-.4 1.3-.6.2-.2.3-.3.6-.1.2.2 1 1.2 1.2 1.5.2.3.3.5.2.7-.1.2-.6.4-1.1.1z"
                            fill="currentColor" />
                    </svg>
                </button>
            </footer>
            <p className="copyright">© {year} Amusa Abdullah | All Rights Reserved.</p>
        </>
    )
}

export default Footer