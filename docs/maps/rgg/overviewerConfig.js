var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "tilesets": [
        {
            "base": "",
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "minZoom": 0,
            "zoomLevels": 8,
            "isOverlay": false,
            "poititle": "Markers",
            "path": "day",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "last_rendertime": 1597161379,
            "north_direction": 0,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1597161763",
        "controls": {
            "pan": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
