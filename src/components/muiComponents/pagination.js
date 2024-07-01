import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function PaginationMui(props) {
	return (
		<Stack alignItems={'center'} spacing={2} marginBottom={'20px'}>
			<Pagination
				onClick={e => {
					console.log(e.target.textContent)
				}}
				className='item'
				count={props.pages}
				sx={{
					'& .MuiButtonBase-root': { color: 'white' },
					'& .MuiPaginationItem-root': { color: 'white' },
					'& .MuiButtonBase-root.Mui-selected': { backgroundColor: '#222D33' },
					'& .Mui-focused': { backgroundColor: '#222D33' },
				}}
			/>
		</Stack>
	)
}
