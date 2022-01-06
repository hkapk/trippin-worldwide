const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const aws = require('aws-sdk');

/*
 * Configure the AWS region of the target bucket.
 * Remember to change this to the relevant region.
 */
//aws.config.region = 'us-east-2';
aws.config.region = process.env.AWS_S3_BUCKET_REGION;

/*
 * Load the S3 information from the environment variables.
 */
const S3_BUCKET = process.env.S3_BUCKET;

router.get('/', withAuth, (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3FileName = Date.now() + "_" + fileName;
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: s3FileName,
      Expires: 60,
      ContentType: fileType,
      // ACL: 'public-read'
    };
    console.log ("s3... = ");
    console.log (s3Params);
    
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${s3FileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  
});

module.exports = router;