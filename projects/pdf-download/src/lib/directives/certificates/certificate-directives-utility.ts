export class CertificateDirectivesUtility {
  static appendGhostDiv(
    id: string,
    dimensions: {
      width: number,
      height: number
    }
  ): HTMLDivElement {
    const divElement = document.createElement('div');
    divElement.id = id;
    divElement.style.position = 'fixed'
    divElement.style.left = '-9999px'
    divElement.style.bottom = '0';
    divElement.style.width = dimensions.width + 'px';
    divElement.style.height = dimensions.height + 'px';
    divElement.style.overflow = 'hidden'; // Hide any content that overflows the div
    document.body.appendChild(divElement); // Append the div to the body
    return divElement;
  }

  static extractFileName(template: string): string {
    try {
      return template.split('/').pop().indexOf('.svg') === -1 ? 'certificate' : template.split('/').pop().split('.svg')[0];
    } catch (e) {
      return 'certificate';
    }
  }
}
