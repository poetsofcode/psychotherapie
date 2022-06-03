<?php
/**
 * Akeeba Engine
 *
 * @package   akeebaengine
 * @copyright Copyright (c)2006-2020 Nicholas K. Dionysopoulos / Akeeba Ltd
 * @license   GNU General Public License version 3, or later
 */

namespace Akeeba\Engine\Postproc\Exception;

defined('AKEEBAENGINE') || die();

/**
 * Indicates that the post-processing engine does not support downloading remotely stored files to the server
 */
class DownloadToServerNotSupported extends EngineException
{
	protected $messagePrototype = 'The %s post-processing engine does not support downloading of backup archives to the server.';
}
