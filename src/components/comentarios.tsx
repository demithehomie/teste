

/*
{text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="movies-list">
          {info.data.map((films) => (
            <li key={films.id}>
              <img
                src={films.image}
                alt={films.original_title}
              />
              {films.original_title}
            </li>
          ))}
        </ul>
      )}

*/