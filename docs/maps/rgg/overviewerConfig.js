var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
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
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "minZoom": 0,
            "world": "world",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "name": "Daytime Render",
            "poititle": "Markers",
            "base": "",
            "path": "day",
            "imgextension": "png",
            "maxZoom": 8,
            "last_rendertime": 1597618579,
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1597618963",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "compass": true,
            "mapType": true
        },
        "debug": true
    }
};
