var overviewerConfig = {
    "tilesets": [
        {
            "name": "Daytime Render",
            "minZoom": 0,
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "showlocationmarker": true,
            "base": "",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "defaultZoom": 1,
            "isOverlay": false,
            "poititle": "Markers",
            "path": "day",
            "last_rendertime": 1599364579
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true
        },
        "cacheTag": "1599364968",
        "debug": true,
        "north_direction": "lower-left"
    },
    "CONST": {
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap"
    }
};
