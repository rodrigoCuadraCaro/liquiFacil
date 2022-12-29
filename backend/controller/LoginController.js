export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/user/id');
    const user = await res.json();

}