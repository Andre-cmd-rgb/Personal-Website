import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Import the specific icons you need from the Bootstrap Icons set
import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';

export default function LinkTreePage() {
  // We can store our links in an array to keep the JSX clean
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/Andre-cmd-rgb',
      icon: <BsGithub />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/andrecmdrgb/',
      icon: <BsInstagram />,
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/Justandrew_tech',
      icon: <BsTwitterX />,
    },
  ];

  return (
    <>
      <Header />
      <section className="section">
        <h2>🔗 Link Tree</h2>
        <p style={{color: 'var(--text-secondary)'}}>All my important socials are here!</p>
        
        <ul className="link-list">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}