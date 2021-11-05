import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {children}
      {router.pathname !== '/' && <Link href='/'>Go to homepage</Link>}
    </>
  );
};

export default Footer;
