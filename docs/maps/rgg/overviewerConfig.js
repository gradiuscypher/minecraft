var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "isOverlay": false,
            "world": "world",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "north_direction": 0,
            "maxZoom": 8,
            "poititle": "Markers",
            "base": "",
            "path": "day",
            "imgextension": "png",
            "defaultZoom": 1,
            "last_rendertime": 1595818579,
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "cacheTag": "1595818990",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "zoom": true
        }
    }
};
