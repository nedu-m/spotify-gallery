// export default function Artist() {
//   return (
//     <>
//       <div className={artistStyle.artistList}>
//         {artists.map(artist => (
//           <div className={artistStyle.artist} key={artist.id}>
//             <Image
//               src={artist.images[0].url}
//               alt={artist.name}
//               width={artist.images[0].width}
//               height={artist.images[0].height}
//               className={artistStyle.artistImage}
//             />
//             <div className={artistStyle.artistInfo}>
//               <h3 className={artistStyle.artistName}>{artist.name}</h3>
//               <p className={artistStyle.artistGenres}>{artist.genres.join(', ')}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }