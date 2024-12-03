import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Import html2canvas
import './ViewFullSchedule.css';

const ViewFullSchedule = () => {
    const downloadPDF = () => {
        const scheduleContainer = document.querySelector('.schedule-container');

        // Use html2canvas to render the schedule as an image
        html2canvas(scheduleContainer).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            // Calculate the dimensions for the PDF
            const imgWidth = 190; // width of the PDF
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const heightLeft = imgHeight;

            let position = 0;

            // Add the image to the PDF
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            position += heightLeft;

            // If the content exceeds one page, add new pages
            while (heightLeft >= pageHeight) {
                position = heightLeft - pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            }

            pdf.save('schedules.pdf'); // Save the PDF with a specified name
        });
    };

    return (
        <div>
            <button onClick={downloadPDF} className="download-button">Download PDF</button>
            <div className="schedule-container">
                <h1 className="schedule-title">Fall 2024 Schedule</h1>
                {/* First Schedule */}
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 15 }, (_, rowIndex) => {
                            const hour = 8 + Math.floor(rowIndex);
                            const timeLabel = `${hour}:00`;
                            return (
                                <tr key={rowIndex}>
                                    <td>{timeLabel}</td>
                                    <td>
                                        {rowIndex === 1 && (
                                            <div className="class-box">
                                                <div>LE EECS 2101 3.00</div>
                                                <div className="course-description">Section Z Term F</div>
                                                <div className="course-description">Lecture [Keele: LSB 103]</div>
                                            </div>
                                        )}
                                        {rowIndex === 10 && (
                                            <div className="class-box eecs3216-lab">
                                                EECS 3216 Lecture
                                                <div className="course-description">Section X Term F</div>
                                                <div className="course-description">Lecture [Keele: ACE 102]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 2 && (
                                            <div className="class-box alternate">
                                                LE EECS 3201 3.00 
                                                <div className="course-description">Section F Term F</div>
                                                <div className="course-description">Lecture [Keele: LAS B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 6 && (
                                            <div className="class-box eng3000">
                                                LE ENG 3000 3.00 
                                                <div className="course-description">Section A Term F</div>
                                                <div className="course-description">Lecture [Keele: CLH B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 9 && (
                                            <div className="class-box eecs2210-lab" rowSpan="2">
                                                LE EECS 2210 3.00
                                                <div className="course-description">Section E Term F</div>
                                                <div className="course-description">Lecture [Keele: LSB 106]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 1 && (
                                            <div className="class-box">
                                                <div>LE EECS 2101 3.00</div>
                                                <div className="course-description">Section Z Term F</div>
                                                <div className="course-description">Lecture [Keele: LSB 103]</div>
                                            </div>
                                        )}
                                        {rowIndex === 3 && (
                                            <div className="class-box eecs2210-lab" rowSpan="2">
                                                EECS 2210 Lab
                                                <div className="course-description">Section E Term F</div>
                                                <div className="course-description">Laboratory 03 [Keele: BRG 334]</div>
                                            </div>
                                        )}
                                        {rowIndex === 10 && (
                                            <div className="class-box eecs3216-lab">
                                                EECS 3216 Lecture
                                                <div className="course-description">Section X Term F</div>
                                                <div className="course-description">Lecture [Keele: ACE 102]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 2 && (
                                            <div className="class-box alternate">
                                                LE EECS 3201 3.00 
                                                <div className="course-description">Section F Term F</div>
                                                <div className="course-description">Lecture [Keele: LAS B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 6 && (
                                            <div className="class-box eng3000">
                                                LE ENG 3000 3.00 
                                                <div className="course-description">Section A Term F</div>
                                                <div className="course-description">Lecture [Keele: CLH B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 9 && (
                                            <div className="class-box eecs2210-lab">
                                                LE EECS 2210 3.00
                                                <div className="course-description">Section E Term F</div>
                                                <div className="course-description">Lecture [Keele: LSB 106]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 1 && (
                                            <div className="class-box">
                                                <div>LE EECS 2101 3.00</div>
                                                <div className="course-description">Section Z Term F</div>
                                                <div className="course-description">Lecture [Keele: LSB 103]</div>
                                            </div>
                                        )}
                                        {rowIndex === 5 && (
                                            <div className="class-box eecs3216-lab">
                                                EECS 3216 Lab
                                                <div className="course-description">Section E Term F</div>
                                                <div className="course-description">Laboratory 02 [Keele: LAS 1004]</div>
                                            </div>
                                        )}
                                        {rowIndex === 10 && (
                                            <div className="class-box eecs3216-lab">
                                                EECS 3216 Lecture
                                                <div className="course-description">Section X Term F</div>
                                                <div className="course-description">Lecture [Keele: ACE 102]</div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Second Schedule */}
                <h2>Winter 2025 Schedule</h2>
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.from({ length: 15 }, (_, rowIndex) => {
                            const hour = 8 + Math.floor(rowIndex);
                            const timeLabel = `${hour}:00`;
                            return (
                                <tr key={rowIndex}>
                                    <td>{timeLabel}</td>
                                    <td>

                                        {rowIndex === 12 && ( // Monday, 18:00 slot for EECS 3216 Lecture
                                            <div className="class-box eecs3216-lab">
                                                SC PHYS 1070 3.00
                                                <div className="course-description">Section A Term W</div>
                                                <div className="course-description">Lecture [Keele: CB 122]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 6 && (
                                            <div className="class-box alternate">
                                                LE EECS 3451 3.00 
                                                <div className="course-description">Section X Term W</div>
                                                <div className="course-description">Lecture [Keele: ACW 103]</div>
                                            </div>
                                        )}
                                        {rowIndex === 6 && (
                                            <div className="class-box eng3000">
                                                LE EECS 3221 3.00 
                                                <div className="course-description">Section Z Term W</div>
                                                <div className="course-description">Lecture [Keele: LAS B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 9 && ( // Tuesday, 17:00 slot for EECS 2210 Lecture
                                            <div className="class-box eecs2210-lab" rowSpan="2">
                                                LE EECS 3101 3.00
                                                <div className="course-description">Section G Term W</div>
                                                <div className="course-description">Lecture [Keele: LAS C]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 1 && (
                                            <div className="class-box">
                                                <div>LE EECS 3214 3.00</div>
                                                <div className="course-description">Section E Term W</div>
                                                <div className="course-description">Lecture [Keele: DB 0004]</div>
                                            </div>
                                        )}
                                        {rowIndex === 3 && (
                                            <div className="class-box eecs2210-lab" rowSpan="2">
                                                EECS 3101 Tutorial
                                                <div className="course-description">Section G Term W</div>
                                                <div className="course-description">Tutorial 04 [Keele: LAS C]</div>
                                            </div>
                                        )}
                                        {rowIndex === 12 && ( // Wednesday, 18:00 slot for EECS 3216 Lecture
                                            <div className="class-box eecs3216-lab">
                                                SC PHYS 1070 3.00
                                                <div className="course-description">Section A Term W</div>
                                                <div className="course-description">Lecture [Keele: CB 122]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 6 && (
                                            <div className="class-box alternate">
                                                LE EECS 3451 3.00 
                                                <div className="course-description">Section X Term W</div>
                                                <div className="course-description">Lecture [Keele: ACW 103]</div>
                                            </div>
                                        )}
                                        {rowIndex === 6 && (
                                            <div className="class-box eng3000">
                                                LE EECS 3221 3.00 
                                                <div className="course-description">Section Z Term W</div>
                                                <div className="course-description">Lecture [Keele: LAS B]</div>
                                            </div>
                                        )}
                                        {rowIndex === 9 && ( // Thursday, 17:00 slot for EECS 2210 Lecture
                                            <div className="class-box eecs2210-lab">
                                                LE EECS 3101 3.00
                                                <div className="course-description">Section G Term W</div>
                                                <div className="course-description">Lecture [Keele: LAS C]</div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {rowIndex === 1 && (
                                            <div className="class-box">
                                                <div>LE EECS 3214 3.00</div>
                                                <div className="course-description">Section E Term W</div>
                                                <div className="course-description">Lecture [Keele: DB 0004]</div>
                                            </div>
                                        )}
                                        {rowIndex === 10 && ( // Friday, 18:00 slot for EECS 3216 Lecture
                                            <div className="class-box eecs3216-lab">
                                               SC PHYS 1070 3.00
                                                <div className="course-description">Section A Term W</div>
                                                <div className="course-description">Tutorial [Keele: CB 122]</div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewFullSchedule;
