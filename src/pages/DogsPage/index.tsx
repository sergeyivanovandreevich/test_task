import React, { useState, useEffect } from 'react';
import { Container, Paper } from '@mui/material';
import { DataGrid, GridColDef, GridRowParams, GridSortModel } from '@mui/x-data-grid';
import { IDog } from '../../types';
import { Modal } from '../../components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'number', cellClassName: 'center-align' },
    { field: 'name', headerName: 'Name', width: 200, type: 'string', cellClassName: 'center-align' },
    { field: 'breed_group', headerName: 'Breed Group', width: 150, type: 'string', cellClassName: 'center-align' },
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        cellClassName: 'center-align',
        renderCell: (params) => (
            <img
                src={params.value}
                alt={params.row.name}
                style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }}
            />
        ),
    },
    { field: 'temperament', headerName: 'Temperament', width: 500, type: 'string', cellClassName: 'center-align' }
];

function DogsPage() {
    const [paginationModel, setPaginationModel] = useState(() => {
        const savedPagination = localStorage.getItem('paginationModel');
        return savedPagination ? JSON.parse(savedPagination) : { pageSize: 10, page: 0 };
    });

    const [sortModel, setSortModel] = useState<GridSortModel>(() => {
        const savedSortModel = localStorage.getItem('sortModel');
        return savedSortModel ? JSON.parse(savedSortModel) : [];
    });

    const [dogs, setDogs] = useState<IDog[]>([]);
    const [selectedDog, setSelectedDog] = useState<IDog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await fetch('https://www.freetestapi.com/api/v1/dogs');
                const data: IDog[] = await response.json();
                setDogs(data);
            } catch (error) {
                console.error('Error fetching dogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
    }, []);

    useEffect(() => {
        localStorage.setItem('paginationModel', JSON.stringify(paginationModel));
    }, [paginationModel]);

    useEffect(() => {
        localStorage.setItem('sortModel', JSON.stringify(sortModel));
    }, [sortModel]);

    return (
        <>
            <Container component="main" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ height: 'calc(100vh - 128px)' }}>
                    <DataGrid
                        rows={dogs}
                        columns={columns}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        sortModel={sortModel}
                        onSortModelChange={setSortModel}
                        pageSizeOptions={[10]}
                        loading={loading}
                        getRowHeight={() => 'auto'}
                        onRowClick={(params: GridRowParams) => setSelectedDog(params.row)}
                        isRowSelectable={() => false}
                        sx={{
                            '& .center-align': {
                                display: 'flex',
                                alignItems: 'center',
                            },
                        }}
                    />
                </Paper>
            </Container>
            {selectedDog && <Modal selectedDog={selectedDog} onClose={() => setSelectedDog(null)} />}
        </>
    );
}

export default DogsPage;
