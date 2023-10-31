import Navbar from "./_components/Navbar";

const Landing = ({ 
    children
}: {
     children: React.ReactNode;
 }) => {
    return (
        <div className="h-full bg-blue-400 dark:bg-[#1f1f1f]">
            <Navbar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    )
}

export default Landing