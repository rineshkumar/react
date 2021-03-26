import List from "./List"
import NewArticleForm from "./NewArticleForm"
const ArticleManagement = () => {
    <>
    <div>
        <h2>
            Articles
        </h2>
        <List/>
    </div>
    <div>
        <h2>Add a new article </h2>
        <NewArticleForm/>
    </div>
    </>

}