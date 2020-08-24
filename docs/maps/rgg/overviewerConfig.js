var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "world": "world",
            "bgcolor": "#1a1a1a",
            "base": "",
            "showlocationmarker": true,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598302579,
            "path": "day",
            "zoomLevels": 8,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "isOverlay": false,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "minZoom": 0
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598302966"
    }
};
