import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Modal, Button } from 'antd';

class App extends React.Component {
    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        this.setState({
            content: content,
        });
    }

    state = { visible: false, content: "" };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const editorObj = {
            height: '500px',
            language: 'zh_CN',
            plugins: 'table lists link image preview code',
            toolbar: `formatselect | code | preview | bold italic strikethrough forecolor backcolor | 
      link image | alignleft aligncenter alignright alignjustify  | 
      numlist bullist outdent indent`,
            relative_urls: false,
            file_picker_types: 'image',
            images_upload_url: '',
            image_advtab: true,
            image_uploadtab: true,
            images_upload_handler: (blobInfo, success, failure) => {
                //这里写你上传图片的方法
            }
        }
        return <div> <Editor
            inline={false}
            // initialValue={newsStore.content}
            selector='editorStateRef'  // 选择器
            apiKey=''
            //  initialValue={editorState}
            init={{ ...editorObj }}
            onEditorChange={this.handleEditorChange}
        />
            <Button type="primary" onClick={this.showModal}>
                按钮
        </Button>
            <Modal
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                {/* eslint-disable-next-line */}
                <iframe srcdoc={this.state.content} style={{ border: '0px' }}></iframe>
                
                {/* <p dangerouslySetInnerHTML={{ __html: this.state.content }}></p> */}
                 
            </Modal>
        </div>;
    }
}

export default App;
