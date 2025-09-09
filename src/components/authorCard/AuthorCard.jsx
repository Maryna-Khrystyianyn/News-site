const AuthorCard = ({author}) => {
    return ( <div className="w-[232px] py-3 px-5 w- bg-white rounded-md flex flex-col justify-center items-center gap-3">
<img className="w-[124px] h-[124px] rounded-md"  src={`../../../public/img/authors/${author.img}`} alt="Author Foto" />
<p className="text-sm text-gray-600">{author.position}</p>
<div className="bg-gray-100 rounded-md p-2 w-full text-center">
    <p className="">{author.name}</p>
</div>
    </div> );
}
 
export default AuthorCard;