/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, Card, CardBody } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import useSetting from '../hooks/use-setting'


function StylesManager() {
  const { value, status, updateStatus, onUpdate } = useSetting('editorskit-addon-styles-manager');

  return (
    <div className="editorskit-addon-manager">
        <Card>
            <CardBody>
                <ToggleControl 
                    checked={value}
                    disabled={ status.loading || updateStatus.loading }
                    onChange={ newStatus => onUpdate( newStatus ) }
                    label={ __( 'Styles Manager', 'editorskit' ) }
                />
            </CardBody>
        </Card>
    </div>
  )
}

export default StylesManager