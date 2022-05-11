    <?php
    extract($_POST);
    $ip = getenv('REMOTE_ADDR');
    $to = "benricheson1@gmail.com";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: RNR Custom Homes <donotreply@rnrcustomhomes.co>'. "\r\n". 'Reply-To: <donotreply@rnrcustomhomes.co>' . "\r\n";
    $headers .= 'Bcc: joeolsen4@gmail.com' . "\r\n";
    $mesg = '<html><head><title>You have a message from RNR Custom Homes</title></head><body bgcolor="#808080"><table><tr>
    <td>'.$subject.'</td></tr>
    <tr><td> Customer contact '.$contact.'</td></tr>
    <tr><td> Sender IP = '.$ip.'</td></tr></table></body></html>';
    mail($to, $topic, $mesg, $headers);
    header( 'Location: index.html' ) ;
    ?>