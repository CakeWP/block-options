/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, Card, CardBody } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import useSetting from '../hooks/use-setting'


function TemplateLibrary() {

  const { value, status, updateStatus, onUpdate } = useSetting('editorskit-addon-template-library');

  return (
    <div className="editorskit-addon-manager">
        <Card>
            <CardBody>
                <ToggleControl 
                    checked={value}
                    disabled={ status.loading || updateStatus.loading }
                    onChange={ newStatus => onUpdate( newStatus ) }
                    label={ __( 'Template Library', 'editorskit' ) }
                />
            </CardBody>
        </Card>
    </div>
  )
}

export default TemplateLibrary