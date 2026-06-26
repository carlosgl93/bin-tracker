const title = 'Pulpa';

const email = 'cgumucio93@gmail.com';

const repository = 'https://github.com/carlosgl93/bin-tracker';

const dateFormat = 'DD, MM, YYYY';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/app-logo.png',
  description: 'Seguimiento de producción de pulpa',
};

export { loader, dateFormat, repository, email, title, defaultMetaTags };
