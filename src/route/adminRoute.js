import express from 'express';
import adminController from '../controllers/adminController';
import multer from 'multer';
import path from 'path';
import { routes } from '../services/commont';
import { verifyAccessTokenAdmin } from '../helpers/JWT_service';

const fileUploader = require('../config/cloudinary.config');
import cloudinary_product from '../utils/cloudinary/cloudinary_product';
import cloudinary_typePoduct from '../utils/cloudinary/cloudinary_typeProduct';
import cloudinary_notify from '../utils/cloudinary/cloudinary_notify';
import cloudinary_eventPromotion from '../utils/cloudinary/cloudinary_eventPromotion';
import cloudinary_music from '../utils/cloudinary/cloudinary_musicapp';

let router = express.Router();

let appRoot = require('app-root-path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + '/src/public/videoTam/');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

let upload = multer({
    storage,
    limits: { fileSize: 104857600 },
});

const initAdminRoute = (app) => {
    //admin api
    router.get(routes.getAllTypeProduct, adminController.getAllTypeProduct);
    router.get(
        routes.getAllTrademark,
        verifyAccessTokenAdmin,
        adminController.getAllTrademark
    );
    router.get(
        routes.getListProductByPage,
        verifyAccessTokenAdmin,
        adminController.getListProductByPage
    );
    router.get(
        routes.getProductBySwapAndPage,
        verifyAccessTokenAdmin,
        adminController.getProductBySwapAndPage
    );
    router.get(
        routes.getListUserAdmin,
        verifyAccessTokenAdmin,
        adminController.getListUserAdmin
    );
    router.get(
        routes.getListEventPromotion,
        verifyAccessTokenAdmin,
        adminController.getListEventPromotion
    );
    router.get(
        routes.getListBillByTypeAdmin,
        verifyAccessTokenAdmin,
        adminController.getListBillByTypeAdmin
    );
    router.get(
        routes.getListVideoAdminByPage,
        verifyAccessTokenAdmin,
        adminController.getListVideoAdminByPage
    );
    router.get(
        routes.getListReportAdmin,
        verifyAccessTokenAdmin,
        adminController.getListReportAdmin
    );
    router.get(
        routes.getListBlogAdminByPage,
        verifyAccessTokenAdmin,
        adminController.getListBlogAdminByPage
    );
    router.get(
        routes.getListReportBlogAdmin,
        verifyAccessTokenAdmin,
        adminController.getListReportBlogAdmin
    );
    router.get(
        routes.getStatisticalAdmin,
        verifyAccessTokenAdmin,
        adminController.getStatisticalAdmin
    );
    router.get(
        routes.StatisticalEvaluateAdmin,
        verifyAccessTokenAdmin,
        adminController.StatisticalEvaluateAdmin
    );
    router.get(
        routes.getStatisticalSale,
        verifyAccessTokenAdmin,
        adminController.getStatisticalSale
    );
    router.get(
        routes.getListKeyWordAdmin,
        verifyAccessTokenAdmin,
        adminController.getListKeyWordAdmin
    );
    router.get(
        routes.getListUserTypeAdmin,
        verifyAccessTokenAdmin,
        adminController.getListUserTypeAdmin
    );
    router.get(
        routes.getCountBillOfMonth,
        verifyAccessTokenAdmin,
        adminController.getCountBillOfMonth
    );
    router.get(
        routes.getMoneyOfMonth,
        verifyAccessTokenAdmin,
        adminController.getMoneyOfMonth
    );
    router.get(
        routes.getDetailBillByIdAdmin,
        verifyAccessTokenAdmin,
        adminController.getDetailBillByIdAdmin
    );
    router.get(
        routes.getInventoryByTypeProduct,
        verifyAccessTokenAdmin,
        adminController.getInventoryByTypeProduct
    );
    router.get(
        routes.layDsCaSi,
        verifyAccessTokenAdmin,
        adminController.layDsCaSi
    );
    router.get(
        routes.layDsBaiHat,
        verifyAccessTokenAdmin,
        adminController.layDsBaiHat
    );
    router.get(
        routes.timKiemBaiHatById,
        adminController.timKiemBaiHatById
    );

    router.get(
        routes.getListLoiBaiHat,
        adminController.getListLoiBaiHat
    );

    //winform
    router.get(
        routes.getListBillNoConfirm,
        verifyAccessTokenAdmin,
        adminController.getListBillNoConfirm
    );
    router.get(
        routes.getDetailBillAdmin,
        verifyAccessTokenAdmin,
        adminController.getDetailBillAdmin
    );
    router.get(
        routes.getListImageProductAdmin,
        verifyAccessTokenAdmin,
        adminController.getListImageProductAdmin
    );
    router.get(
        routes.getInfoProductAdmin,
        verifyAccessTokenAdmin,
        adminController.getInfoProductAdmin
    );
    router.get(
        routes.getClassifyProductAdmin,
        verifyAccessTokenAdmin,
        adminController.getClassifyProductAdmin
    );
    router.get(
        routes.getAddressBillAdmin,
        verifyAccessTokenAdmin,
        adminController.getAddressBillAdmin
    );
    router.get(
        routes.confirmBillAdmin,
        verifyAccessTokenAdmin,
        adminController.confirmBillAdmin
    );
    router.get(
        routes.updateStatusBillAdmin,
        verifyAccessTokenAdmin,
        adminController.updateStatusBillAdmin
    );
    router.get(
        routes.getListStatusBillAdmin,
        verifyAccessTokenAdmin,
        adminController.getListStatusBillAdmin
    );
    //end winform

    router.post(
        routes.addTrademark,
        verifyAccessTokenAdmin,
        adminController.addTrademark
    );
    router.post(
        routes.addTypeProduct,
        verifyAccessTokenAdmin,
        cloudinary_typePoduct.single('file'),
        adminController.addTypeProduct
    );
    router.post(
        routes.cloudinaryUpload,
        verifyAccessTokenAdmin,
        cloudinary_product.array('file'),
        adminController.cloudinaryUpload
    );
    router.post(
        routes.createNewProduct,
        verifyAccessTokenAdmin,
        adminController.createNewProduct
    );
    router.post(
        routes.addPromotionByIdProduct,
        verifyAccessTokenAdmin,
        adminController.addPromotionByIdProduct
    );
    router.post(
        routes.swapImageProduct,
        verifyAccessTokenAdmin,
        adminController.swapImageProduct
    );
    router.post(
        routes.createNewKeyWord,
        verifyAccessTokenAdmin,
        adminController.createNewKeyWord
    );
    router.post(
        routes.createNotify_noimage,
        verifyAccessTokenAdmin,
        adminController.createNotify_noimage
    );
    router.post(
        routes.createNotify_image,
        verifyAccessTokenAdmin,
        cloudinary_notify.single('file'),
        adminController.createNotify_image
    );
    router.post(
        routes.CheckLoginAdminAccessToken,
        verifyAccessTokenAdmin,
        adminController.CheckLoginAdminAccessToken
    );
    router.post(
        routes.createNewUserAdmin,
        verifyAccessTokenAdmin,
        adminController.createNewUserAdmin
    );
    router.post(
        routes.createEventPromotion,
        verifyAccessTokenAdmin,
        adminController.createEventPromotion
    );
    router.post(
        routes.upLoadImageCoverPromotion,
        verifyAccessTokenAdmin,
        cloudinary_eventPromotion.single('file'),
        adminController.upLoadImageCoverPromotion
    );
    router.post(routes.adminLogin, adminController.adminLogin);
    router.post(
        routes.checkLoginWithAdmin,
        verifyAccessTokenAdmin,
        adminController.checkLoginWithAdmin
    );
    router.post(
        routes.themCaSi,
        verifyAccessTokenAdmin,
        cloudinary_music.single('file'),
        adminController.themCaSi
    );
    router.post(
        routes.themBaiHat,
        verifyAccessTokenAdmin,
        cloudinary_music.array('file'),
        adminController.themBaiHat
    );

    router.post(
        routes.themLoiBaiHat,
        verifyAccessTokenAdmin,
        adminController.themLoiBaiHat
    );


    router.put(
        routes.confirmBillById,
        verifyAccessTokenAdmin,
        adminController.confirmBillById
    );
    router.put(
        routes.cancelBillById,
        verifyAccessTokenAdmin,
        adminController.cancelBillById
    );
    router.put(
        routes.updateTypeProductById,
        verifyAccessTokenAdmin,
        cloudinary_typePoduct.single('file'),
        adminController.updateTypeProductById
    );
    router.put(
        routes.updateTrademarkById,
        verifyAccessTokenAdmin,
        adminController.updateTrademarkById
    );
    router.put(
        routes.editProductById,
        verifyAccessTokenAdmin,
        adminController.editProductById
    );
    router.put(
        routes.blockProduct,
        verifyAccessTokenAdmin,
        adminController.blockProduct
    );
    router.put(
        routes.editImageProduct,
        verifyAccessTokenAdmin,
        cloudinary_product.single('file'),
        adminController.editImageProduct
    );
    router.put(
        routes.lockUserAdmin,
        verifyAccessTokenAdmin,
        adminController.lockUserAdmin
    );
    router.put(
        routes.editEventPromotion,
        verifyAccessTokenAdmin,
        adminController.editEventPromotion
    );
    router.put(
        routes.updateStatusBillAdminWeb,
        verifyAccessTokenAdmin,
        adminController.updateStatusBillAdminWeb
    );
    router.put(
        routes.skipReportVideoAdmin,
        verifyAccessTokenAdmin,
        adminController.skipReportVideoAdmin
    );
    router.put(
        routes.skipReportBlogAdmin,
        verifyAccessTokenAdmin,
        adminController.skipReportBlogAdmin
    );
    router.put(
        routes.editKeyWordSearchAdmin,
        verifyAccessTokenAdmin,
        adminController.editKeyWordSearchAdmin
    );

    router.put(routes.suaCaSi, verifyAccessTokenAdmin, adminController.suaCaSi);
    router.put(
        routes.suaBaiHat,
        verifyAccessTokenAdmin,
        adminController.suaBaiHat
    );
    router.put(
        routes.suaLoiBaiHatById,
        verifyAccessTokenAdmin,
        adminController.suaLoiBaiHatById
    );

    router.put(
        routes.suaThoiGianBaiHatById,
        verifyAccessTokenAdmin,
        adminController.suaThoiGianBaiHatById
    );

    router.delete(
        routes.deleteTypeProduct,
        verifyAccessTokenAdmin,
        adminController.deleteTypeProduct
    );
    router.delete(
        routes.deleteTrademarkById,
        verifyAccessTokenAdmin,
        adminController.deleteTrademarkById
    );
    router.delete(
        routes.deleteErrorProduct,
        verifyAccessTokenAdmin,
        adminController.deleteErrorProduct
    );
    router.delete(
        routes.deleteShortVideoAdmin,
        verifyAccessTokenAdmin,
        adminController.deleteShortVideoAdmin
    );
    router.delete(
        routes.deleteBlogAdminById,
        verifyAccessTokenAdmin,
        adminController.deleteBlogAdminById
    );
    router.delete(
        routes.deleteKeyWordAdmin,
        verifyAccessTokenAdmin,
        adminController.deleteKeyWordAdmin
    );
    router.delete(
        routes.deleteEventPromotionAdmin,
        verifyAccessTokenAdmin,
        adminController.deleteEventPromotionAdmin
    );
    router.delete(
        routes.xoaCaSi,
        verifyAccessTokenAdmin,
        adminController.xoaCaSi
    );
    router.delete(
        routes.xoaBaiHat,
        verifyAccessTokenAdmin,
        adminController.xoaBaiHat
    );

    router.delete(
        routes.xoaLoiBaiHatById,
        verifyAccessTokenAdmin,
        adminController.xoaLoiBaiHatById
    );

    return app.use('/', router);
};

export default initAdminRoute;
