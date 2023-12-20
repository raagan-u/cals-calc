import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";


export default function View2(data) {
	const columns = [
		{
			header: 'ID',
			accessorKey: 'meal_id',
		},
		{
			header: 'NAME',
			accessorKey: 'meal_name',
		},
		{
			header: 'CALS',
			accessorKey: 'cals',
		},
		{
			header: 'CARBS',
			accessorKey: 'carbs',
		},
		{
			header: 'prot',
			accessorKey: 'prot',
		},
		{
			header: 'FATS',
			accessorKey: 'fats',
		},
	]

	const table = useReactTable({data, columns});

	return (
		<div>
			<table>
				{table.getHeaderGroups().map(headerGroup=> (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map(header =>  (
							<th key={header.id}>
								{flexRender(
									header.column.columnDef.header, header.getContext()
								)}
							</th>
						))}
					</tr>
				))}
				<thead>
					<tr>
						<th>ID</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ID</td>
					</tr>
				</tbody>
			</table>
		</div>
	)

}