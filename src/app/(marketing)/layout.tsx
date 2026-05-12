import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* had to comment out header because it appear in waitlist page following stritly the folder structure given to me let me know if i shoudl fix */}
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
