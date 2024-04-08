import { useParams } from "react-router-dom"

const Category = () => {
    const {category} = useParams()
    console.log(category)
  return (
    <div>
      <h1>{category}</h1>
    </div>
  )
}

export default Category
