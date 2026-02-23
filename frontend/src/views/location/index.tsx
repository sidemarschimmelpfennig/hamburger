export function Location() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          color: '#ffbb33',
          fontWeight: 'bold',
          padding: '1rem',
        }}
      >
        Localização
      </h1>
      <p
        style={{
          fontSize: '1rem',
          textAlign: 'center',
          maxWidth: '80vw',
          margin: '0 auto',
          paddingBottom: '1rem',
        }}
      >
        Confira o endereço do nosso restaurante e encontre-nos facilmente.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.715879042413!2d-43.24642910321044!3d-22.84999889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9979b9829203d7%3A0xee24e567952b4a08!2sHero%C3%ADs%20Burger%20%2F%20Parque%20Uni%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1771814406741!5m2!1spt-BR!2sbr'
          style={{
            border: 0,
            height: '300px',
            width: '300px',
            borderRadius: '30px',
          }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
}
