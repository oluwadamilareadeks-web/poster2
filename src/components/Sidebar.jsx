

const Sidebar =({students}) => {
   // console.log(students)
            return(
                <div className="col-md-4">
                    <h3>Sidebar Section</h3>
                    <ul>
                        {
                            students.map((std, index)=>{
                                return <li key={index}>{std}</li>
                            })
                        }
                    </ul>
                </div>
            )
}
export default Sidebar;