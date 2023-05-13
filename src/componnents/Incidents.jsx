import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component';
import downloadCSV from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import Export from "react-data-table-component"
import { orderBy } from 'lodash';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// A super simple expandable component.

function Incidents() {
    const [myForms, setMyForms] = useState([]);

    useEffect(() => {
        const forms = localStorage.getItem('myForms');
        if (forms) {
            setMyForms(JSON.parse(forms));
            console.log(forms)
        }
    }, []);

    const handleDelete = (row) => {
        const filteredForms = myForms.filter((form) => form !== row);
        setMyForms(filteredForms);
        localStorage.setItem('myForms', JSON.stringify(filteredForms));
    };


    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(myForms[1]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }
    const Export = ({ onExport }) => <Button onClick={e => onExport(e.target.value)}>Export</Button>;

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(myForms, null, 2)}</pre>;

    const Column = [
        {
            name: 'COmment'
            , selector: row => row.COmment,
            sortable: true,
        },
        {
            name: 'Categorie'
            , selector: row => row.Categorie
        },
        {
            name: 'Categorie_client'
            , selector: row => row.Categorie_client
        },
        {
            name: 'Constitution'
            , selector: row => row.Constitution
        },
        {
            name: 'Date'
            , selector: row => row.Date
        },
        {
            name: 'Debit'
            , selector: row => row.Debit
        },
        {
            name: 'Heure'
            , selector: row => row.Heure
        },
        {
            name: 'ND_Login'
            , selector: row => row.ND_Login
        },
        {
            name: 'NoCOmmand'
            , selector: row => row.NoCOmmand
        },
        {
            name: 'NoOrder'
            , selector: row => row.NoOrder
        },
        {
            name: 'OperateurEmmetteur'
            , selector: row => row.OperateurEmmetteur
        },
        {
            name: 'Operation'
            , selector: row => row.Operation
        },
        {
            name: 'QS'
            , selector: row => row.QS
        },
        {
            name: 'Raisonsocial'
            , selector: row => row.Raisonsocial
        },
        {
            name: 'Repartiteur'
            , selector: row => row.Repartiteur
        },
        {
            name: 'Typedecommande'
            , selector: row => row.Typedecommande
        },
        {
            name: 'Typedeprestation'
            , selector: row => row.Typedeprestation
        },
        {
            name: 'ZoneReseau'
            , selector: row => row.ZoneReseau
        },
        {
            name: 'adressinstallation'
            , selector: row => row.adressinstallation
        },
        {
            name: 'complementadresse'
            , selector: row => row.complementadresse
        },
        {
            name: 'switchPort'
            , selector: row => row.switchPort
        },
        {
            name: 'Actions',
            cell: (row) => (
                <button onClick={() => handleDelete(row)}>Delete</button>
            ),
        },
    ]

    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(myForms)} />, []);
    return (
        <>

            <Container className="col-10 mt-5 pb-5">

                <Link to={'/'} className='btn btn-dark'>Back to Form</Link>
                <hr />
                <h1 className='text-light'>Mes Incidents</h1>
                <Container style={{ overflowX: 'auto' }}>
                    <DataTable
                        id='MyTable'
                        columns={Column}
                        data={myForms}
                        expandableRows expandableRowsComponent={ExpandedComponent}
                        selectableRows
                        sortServer

                        persistTableHead
                        actions={actionsMemo}
                        pagination
                    ></DataTable>
                </Container>

            </Container >
        </>
    );
}

export default Incidents;
