import pkg from '../../package.json'

const Footer = () => (
  <footer className="justify-between pt-4 mt-28 text-slate-500 border-t border-slate-200 sm:flex">
    <p className="w-full text-center">
      Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      by{' '}
      <a
        href={pkg.author.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {`@${pkg.author.name}`}
      </a>
    </p>
  </footer>
)

export default Footer
