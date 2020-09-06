var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "last_rendertime": 1599350280,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "world": "Core01",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "zoomLevels": 10,
            "isOverlay": false,
            "base": "",
            "maxZoom": 10,
            "imgextension": "png",
            "path": "day"
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "compass": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599350486"
    }
};
