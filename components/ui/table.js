export function Table({ children, className }) {
    return <table className={`min-w-full bg-white ${className}`}>{children}</table>;
  }
  
  export function TableHeader({ children }) {
    return <thead className="bg-gray-100">{children}</thead>;
  }
  
  export function TableBody({ children }) {
    return <tbody>{children}</tbody>;
  }
  
  export function TableRow({ children, className }) {
    return <tr className={`border-b ${className}`}>{children}</tr>;
  }
  
  export function TableCell({ children, className }) {
    return <td className={`p-4 ${className}`}>{children}</td>;
  }
  
  export function TableHead({ children, className }) {
    return <th className={`p-4 font-bold text-left ${className}`}>{children}</th>;
  }
  