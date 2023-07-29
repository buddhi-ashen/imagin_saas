const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full overflow-auto " style={{
      backgroundImage: 'url("https://source.unsplash.com/random/?dark")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      objectFit: 'cover',
       // Darken the background using an rgba color
    }}>
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;