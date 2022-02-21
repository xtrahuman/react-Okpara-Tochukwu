import{useQuery,gql} from "@apollo/client";



const CATEGORIES_QUERY = gql`
  query CategoriesQuery{
    categories{
    name,
    products{
      id
    }
  }
}
`

function CategoriesName() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.categories.map(({ name,products }) => (
    <div key={name}>
      <p>
        {name}
      </p>
      {products.map(({id}) =>(
        <p key={id}>
          {id}
        </p>
      ) )}
    </div>
  ));
}

function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <CategoriesName />
    </div>
  );
}

export default App;
