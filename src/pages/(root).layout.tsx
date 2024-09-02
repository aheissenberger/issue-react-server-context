import { MyProvider } from "myui";
export default function Layout({ children }) {
    return (
        <html>
            <body>
                <MyProvider theme={{ name: 'new' }}>
                    <div>
                        <h1>My Layout</h1>
                        {children}
                    </div>
                </MyProvider>
            </body>
        </html >
    );
}