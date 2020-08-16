var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1597582964"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "last_rendertime": 1597582579,
            "isOverlay": false,
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "world": "world",
            "showlocationmarker": true,
            "maxZoom": 8
        }
    ]
};
