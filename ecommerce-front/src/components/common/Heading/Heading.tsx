function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3" style={{ fontSize: "26px" }}>
      {children}
    </div>
  );
}

export default Heading;
