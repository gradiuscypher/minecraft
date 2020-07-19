var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "base": "",
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "name": "Daytime Render",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1595170579,
            "defaultZoom": 1,
            "zoomLevels": 8,
            "showlocationmarker": true,
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1595170961",
        "north_direction": "lower-left"
    }
};
