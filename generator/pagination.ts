//Я не поняла где можно использовать постраничную навигацию, поэтому на всякий случай добавила просто файл с моим рабочим кодом


// const router = express.Router(); //для экспресс

// router
//   .route('/reports/:id_report/page/:current_page/limit/:page_size')
//   .get(
//     async (
//       req: Request<ReportPaginationParams>,
//       res: Response<ReportForPaginate | Message>,
//     ) => {
//       try {
//         const { id_report, current_page, page_size } = req.params;
//         const reportId: number = parseInt(id_report, 10);
//         const currentPage: number = parseInt(current_page, 10);
//         const pageSize: number = parseInt(page_size, 10);
//         const results = await Report.findAndCountAll({
//           where: { id_report: reportId },
//           order: [['date', 'DESC']],
//           limit: pageSize,
//           offset: pageSize * (currentPage - 1),
//         });
//         res.status(200).json({
//           report_rows: results.rows,
//           total_pages: Math.ceil(results.count / pageSize),
//         });
//       } catch (error) {
//         if (error instanceof Error) {
//           res.status(500).json({ message: error.message });
//         } else {
//           res.status(500).json({ message: 'An unknown error occurred.' });
//         }
//       }
//     },
//   );
