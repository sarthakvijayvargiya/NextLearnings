export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>inner Items</h1>
      <div>{children}</div>
    </>
  );
}
