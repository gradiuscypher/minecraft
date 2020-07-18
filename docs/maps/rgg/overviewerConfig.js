var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "last_rendertime": 1595094979,
            "world": "world",
            "minZoom": 0,
            "base": "",
            "imgextension": "png",
            "maxZoom": 8,
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "poititle": "Markers",
            "isOverlay": false,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "cacheTag": "1595095360",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "spawn": true
        }
    }
};
