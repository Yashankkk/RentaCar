import React, { useState } from 'react';
import { Rate, Upload, Button, Input, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Review = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const file = newFileList[0]?.originFileObj;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = () => {
    if (!rating || !feedback) {
      setShowAlert(false);
      return;
    }

    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    console.log('Uploaded Files:', fileList);

    setShowAlert(true); // Show alert on success

    // Reset form
    setRating(0);
    setFeedback('');
    setFileList([]);
    setPreviewUrl(null);

    // Hide alert after a few seconds (optional)
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 !px-4 bg-cover"
    style={{ backgroundImage : "url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
      <div className="w-full max-w-md bg-white !p-6 shadow-lg rounded-xl space-y-6">
        {/* Upload section at the top */}
        <Upload
          beforeUpload={() => false}
          onChange={handleFileChange}
          fileList={fileList}
          maxCount={1}
          className="w-full"
        >
          <Button icon={<UploadOutlined />} className="w-full">
            Upload Profile Picture
          </Button>
        </Upload>

        {/* Profile Picture Preview */}
        {previewUrl && (
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={previewUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <h2 className="text-xl font-semibold text-center">Rate Our Service</h2>

        <Rate
          onChange={setRating}
          value={rating}
          className="w-full justify-center flex"
        />

        <TextArea
          rows={4}
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full"
        />
        <br />
        <br />
        {showAlert && (
          <Alert
            message="Thank you for your feedback!"
            type="success"
            showIcon
            closable
          />
        )}
        <br />
        <br />
        <Button type="primary" onClick={handleSubmit} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Review;
