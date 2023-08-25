import '../styles/Page.css'
import { AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";
import { Store } from './AdminUI';
import { multipleDelete } from '../Utils/multipleDelete';
import { useContext } from 'react';


// eslint-disable-next-line react/prop-types
const Page = ({ totalPageCount, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPageCount }, (_, index) => index + 1);
  const { users,
    setUsers,
    selected, 
    setCheckedAll,
    totalUsers,
    setTotalUsers
  } = useContext(Store);

  return (
      <div className="pageRoot">
        <div className='deleteSelectedButton'>
          <button
            onClick={() => {
              setUsers(multipleDelete(users, selected));
              setTotalUsers(multipleDelete(totalUsers, selected));
              setCheckedAll(false);
            }}
          >
            Delete Selected
          </button>
        </div>
        <div className='page'>
          {/* left skip button */}
          <button
            disabled={currentPage == 1 ? true : false}
            onClick={() => setCurrentPage(1)}
          >
            <AiOutlineDoubleLeft />
          </button>

          <button
            disabled={currentPage == 1 ? true : false}
            onClick={() => setCurrentPage(currentPage - 1)
            }
          >
            <AiOutlineLeft />
          </button>
          {/* page count map */}
          {
            pages.map((page) => {
              return (
                <button
                  key={page}
                  className={currentPage === page ? "selected" : "notSelected"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            })
          }
          {/* right skip button */}
          <button
            disabled={currentPage == totalPageCount ? true : false}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <AiOutlineRight />
          </button>
          <button
            disabled={currentPage == totalPageCount ? true : false}
            onClick={() => setCurrentPage(totalPageCount)}
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
      </div>
  )
}

export default Page